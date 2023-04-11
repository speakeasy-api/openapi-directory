import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DistributionGroupsBulkDeleteUsersSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The list of members to add
 */
export declare class DistributionGroupsBulkDeleteUsersRequestBody extends SpeakeasyBase {
    /**
     * The list of emails of the users
     */
    userEmails?: string[];
}
export declare class DistributionGroupsBulkDeleteUsersRequest extends SpeakeasyBase {
    /**
     * The list of members to add
     */
    requestBody: DistributionGroupsBulkDeleteUsersRequestBody;
    /**
     * The name of the distribution group
     */
    distributionGroupName: string;
    /**
     * The organization's name
     */
    orgName: string;
}
export declare class DistributionGroupsBulkDeleteUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
