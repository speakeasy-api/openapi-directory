import { SpeakeasyBase } from "../../../internal/utils";
import { AssociatedApplication } from "./associatedapplication";
import { ServerDetail } from "./serverdetail";
/**
 * Success
 */
export declare class GetServerDetailsResponse extends SpeakeasyBase {
    associatedApplications?: AssociatedApplication[];
    nextToken?: string;
    serverDetail?: ServerDetail;
}
