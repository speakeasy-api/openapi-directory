import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LicensesGetForRepoRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class LicensesGetForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    licenseContent?: shared.LicenseContent;
}
