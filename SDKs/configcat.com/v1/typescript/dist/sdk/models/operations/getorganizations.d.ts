import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOrganizationsResponse extends SpeakeasyBase {
    contentType: string;
    organizationModelHaljsons?: shared.OrganizationModelHaljson[];
    organizationModels?: shared.OrganizationModel[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
