import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditNameServersRequest extends SpeakeasyBase {
    editNameServers?: shared.EditNameServers;
    /**
     * Automatically added
     */
    domainNamePathParameter: string;
    /**
     * The domain name
     */
    domainNameQueryParameter: string;
}
export declare class EditNameServersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
