import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReleasesDeleteWithDistributionGroupIdSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ReleasesDeleteWithDistributionGroupIdRequest extends SpeakeasyBase {
    /**
     * The name of the app
     */
    appName: string;
    /**
     * The name of the distribution group.
     */
    distributionGroupName: string;
    /**
     * The name of the app owner
     */
    ownerName: string;
    /**
     * The ID identifying the unique release.
     */
    releaseId: number;
}
export declare class ReleasesDeleteWithDistributionGroupIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
