import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DistributionGroupsBulkDeleteAppsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class DistributionGroupsBulkDeleteAppsRequestBodyApps extends SpeakeasyBase {
    /**
     * The name of the app to be deleted from the distribution group
     */
    name: string;
}
/**
 * The name of the apps to be deleted from the distribution group. The apps have to be owned by the organization.
 */
export declare class DistributionGroupsBulkDeleteAppsRequestBody extends SpeakeasyBase {
    /**
     * The list of apps to delete from the distribution group
     */
    apps?: DistributionGroupsBulkDeleteAppsRequestBodyApps[];
}
export declare class DistributionGroupsBulkDeleteAppsRequest extends SpeakeasyBase {
    /**
     * The name of the apps to be deleted from the distribution group. The apps have to be owned by the organization.
     */
    requestBody: DistributionGroupsBulkDeleteAppsRequestBody;
    /**
     * The name of the distribution group
     */
    distributionGroupName: string;
    /**
     * The organization's name
     */
    orgName: string;
}
export declare class DistributionGroupsBulkDeleteAppsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
