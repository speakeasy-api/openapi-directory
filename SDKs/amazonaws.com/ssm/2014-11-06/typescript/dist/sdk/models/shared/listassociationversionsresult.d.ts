import { SpeakeasyBase } from "../../../internal/utils";
import { AssociationVersionInfo } from "./associationversioninfo";
/**
 * Success
 */
export declare class ListAssociationVersionsResult extends SpeakeasyBase {
    associationVersions?: AssociationVersionInfo[];
    nextToken?: string;
}
