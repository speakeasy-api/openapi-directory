import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConfigureDomainRequest extends SpeakeasyBase {
    /**
     * Contains the domain renew information
     */
    editDomainWillRenewRequest?: shared.EditDomainWillRenewRequest;
    /**
     * Automatically added
     */
    domainNamePathParameter: string;
    /**
     * The domain name
     */
    domainNameQueryParameter: string;
}
export declare class ConfigureDomainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
