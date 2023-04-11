import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTagMapping } from "./resourcetagmapping";
/**
 * Success
 */
export declare class GetResourcesOutput extends SpeakeasyBase {
    paginationToken?: string;
    resourceTagMappingList?: ResourceTagMapping[];
}
