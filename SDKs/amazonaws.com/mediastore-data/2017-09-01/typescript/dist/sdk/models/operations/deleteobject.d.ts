import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteObjectRequest extends SpeakeasyBase {
    /**
     * The path (including the file name) where the object is stored in the container. Format: &lt;folder name&gt;/&lt;folder name&gt;/&lt;file name&gt;
     */
    path: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteObjectResponse extends SpeakeasyBase {
    /**
     * ContainerNotFoundException
     */
    containerNotFoundException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteObjectResponse?: Record<string, any>;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * ObjectNotFoundException
     */
    objectNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
