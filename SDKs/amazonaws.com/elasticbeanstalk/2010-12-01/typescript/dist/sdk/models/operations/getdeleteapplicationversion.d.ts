import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteApplicationVersionActionEnum {
    DeleteApplicationVersion = "DeleteApplicationVersion"
}
export declare enum GETDeleteApplicationVersionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETDeleteApplicationVersionRequest extends SpeakeasyBase {
    action: GETDeleteApplicationVersionActionEnum;
    /**
     * The name of the application to which the version belongs.
     */
    applicationName: string;
    /**
     * Set to <code>true</code> to delete the source bundle from your storage bucket. Otherwise, the application version is deleted only from Elastic Beanstalk and the source bundle remains in Amazon S3.
     */
    deleteSourceBundle?: boolean;
    version: GETDeleteApplicationVersionVersionEnum;
    /**
     * The label of the version to delete.
     */
    versionLabel: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteApplicationVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
