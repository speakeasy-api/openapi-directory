import { SpeakeasyBase } from "../../../internal/utils";
import { EntitledApplication } from "./entitledapplication";
/**
 * Success
 */
export declare class ListEntitledApplicationsResult extends SpeakeasyBase {
    entitledApplications?: EntitledApplication[];
    nextToken?: string;
}
