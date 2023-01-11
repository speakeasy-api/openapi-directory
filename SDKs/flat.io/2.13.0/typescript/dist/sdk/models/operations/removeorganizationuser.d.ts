import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveOrganizationUserPathParams extends SpeakeasyBase {
    user: string;
}
export declare class RemoveOrganizationUserQueryParams extends SpeakeasyBase {
    convertToIndividual?: boolean;
}
export declare class RemoveOrganizationUserSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class RemoveOrganizationUserRequest extends SpeakeasyBase {
    pathParams: RemoveOrganizationUserPathParams;
    queryParams: RemoveOrganizationUserQueryParams;
    security: RemoveOrganizationUserSecurity;
}
export declare class RemoveOrganizationUserResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
