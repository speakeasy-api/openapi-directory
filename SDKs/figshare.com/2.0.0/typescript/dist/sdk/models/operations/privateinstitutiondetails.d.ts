import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateInstitutionDetailsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateInstitutionDetailsRequest extends SpeakeasyBase {
    security: PrivateInstitutionDetailsSecurity;
}
export declare class PrivateInstitutionDetailsResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    institution?: shared.Institution;
    statusCode: number;
}
