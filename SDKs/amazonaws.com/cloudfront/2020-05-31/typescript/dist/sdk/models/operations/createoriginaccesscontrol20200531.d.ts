import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A CloudFront origin access control configuration.
 */
export declare class CreateOriginAccessControl20200531RequestBodyOriginAccessControlConfig extends SpeakeasyBase {
    description?: string;
    name?: string;
    originAccessControlOriginType?: shared.OriginAccessControlOriginTypesEnum;
    signingBehavior?: shared.OriginAccessControlSigningBehaviorsEnum;
    signingProtocol?: shared.OriginAccessControlSigningProtocolsEnum;
}
export declare class CreateOriginAccessControl20200531RequestBody extends SpeakeasyBase {
    /**
     * A CloudFront origin access control configuration.
     */
    originAccessControlConfig: CreateOriginAccessControl20200531RequestBodyOriginAccessControlConfig;
}
export declare class CreateOriginAccessControl20200531Request extends SpeakeasyBase {
    requestBody: Uint8Array;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateOriginAccessControl20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
