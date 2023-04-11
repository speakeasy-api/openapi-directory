import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DistributionGroupsAddAppsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class DistributionGroupsAddAppsRequestBodyApps extends SpeakeasyBase {
    /**
     * The name of the app to be added to the distribution group
     */
    name: string;
}
/**
 * The name of the apps to be added to the distribution group. The apps have to be owned by the organization.
 */
export declare class DistributionGroupsAddAppsRequestBody extends SpeakeasyBase {
    /**
     * The list of apps to add to distribution group
     */
    apps?: DistributionGroupsAddAppsRequestBodyApps[];
}
export declare class DistributionGroupsAddAppsRequest extends SpeakeasyBase {
    /**
     * The name of the apps to be added to the distribution group. The apps have to be owned by the organization.
     */
    requestBody: DistributionGroupsAddAppsRequestBody;
    /**
     * The name of the distribution group
     */
    distributionGroupName: string;
    /**
     * The organization's name
     */
    orgName: string;
}
export declare class DistributionGroupsAddAppsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
