import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateInstitutionEmbargoOptionsDetailsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateInstitutionEmbargoOptionsDetailsRequest extends SpeakeasyBase {
    security: PrivateInstitutionEmbargoOptionsDetailsSecurity;
}
export declare class PrivateInstitutionEmbargoOptionsDetailsResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    groupEmbargoOptions?: shared.GroupEmbargoOptions[];
    statusCode: number;
}
