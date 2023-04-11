import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceDescription } from "./resourcedescription";
/**
 * Success
 */
export declare class ListResourcesOutput extends SpeakeasyBase {
    nextToken?: string;
    resourceDescriptions?: ResourceDescription[];
    typeName?: string;
}
