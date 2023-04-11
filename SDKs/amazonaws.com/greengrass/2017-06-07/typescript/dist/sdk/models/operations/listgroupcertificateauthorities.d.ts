import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListGroupCertificateAuthoritiesRequest extends SpeakeasyBase {
    /**
     * The ID of the Greengrass group.
     */
    groupId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListGroupCertificateAuthoritiesResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * Success
     */
    listGroupCertificateAuthoritiesResponse?: shared.ListGroupCertificateAuthoritiesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
