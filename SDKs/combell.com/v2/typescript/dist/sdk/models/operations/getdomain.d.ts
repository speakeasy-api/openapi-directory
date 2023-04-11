import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDomainRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    domainNamePathParameter: string;
    /**
     * The domain name
     */
    domainNameQueryParameter: string;
}
export declare class GetDomainResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    domainDetail?: shared.DomainDetail;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
