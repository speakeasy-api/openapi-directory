import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SaveCompanyInfoRequest extends SpeakeasyBase {
    request: shared.CompanyInfo;
}
export declare class SaveCompanyInfoResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
