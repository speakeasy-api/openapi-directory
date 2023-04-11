import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationComponentDetail } from "./applicationcomponentdetail";
import { AssociatedApplication } from "./associatedapplication";
/**
 * Success
 */
export declare class GetApplicationComponentDetailsResponse extends SpeakeasyBase {
    applicationComponentDetail?: ApplicationComponentDetail;
    associatedApplications?: AssociatedApplication[];
    associatedServerIds?: string[];
    moreApplicationResource?: boolean;
}
