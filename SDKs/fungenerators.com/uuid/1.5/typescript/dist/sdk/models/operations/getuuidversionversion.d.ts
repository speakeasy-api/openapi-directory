import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetUuidVersionVersionSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: string;
}
export declare class GetUuidVersionVersionRequest extends SpeakeasyBase {
    /**
     * Number of UUID's to generate (defaults to 1)
     */
    count?: number;
    /**
     * For v3 and v5 of UUID Spec supply the text value for the type specified dns/url/oid/x500/nil. For example specify a dns/domain string if the type is "dns"
     */
    text?: string;
    /**
     * For v3 and v5 of UUID Spec you can supply the type (dns/url/oid/x500/nil).
     */
    type?: string;
    /**
     * Version of the UUID spec to use. (0-5), Use '0' for nil (00000000-0000-0000-0000-000000000000) UUID.
     */
    version: number;
}
export declare class GetUuidVersionVersionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
