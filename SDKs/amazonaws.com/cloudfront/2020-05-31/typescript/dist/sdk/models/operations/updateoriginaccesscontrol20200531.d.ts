import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A CloudFront origin access control configuration.
 */
export declare class UpdateOriginAccessControl20200531RequestBodyOriginAccessControlConfig extends SpeakeasyBase {
    description?: string;
    name?: string;
    originAccessControlOriginType?: shared.OriginAccessControlOriginTypesEnum;
    signingBehavior?: shared.OriginAccessControlSigningBehaviorsEnum;
    signingProtocol?: shared.OriginAccessControlSigningProtocolsEnum;
}
export declare class UpdateOriginAccessControl20200531RequestBody extends SpeakeasyBase {
    /**
     * A CloudFront origin access control configuration.
     */
    originAccessControlConfig: UpdateOriginAccessControl20200531RequestBodyOriginAccessControlConfig;
}
export declare class UpdateOriginAccessControl20200531Request extends SpeakeasyBase {
    /**
     * The unique identifier of the origin access control that you are updating.
     */
    id: string;
    /**
     * The current version (<code>ETag</code> value) of the origin access control that you are updating.
     */
    ifMatch?: string;
    requestBody: Uint8Array;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateOriginAccessControl20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
