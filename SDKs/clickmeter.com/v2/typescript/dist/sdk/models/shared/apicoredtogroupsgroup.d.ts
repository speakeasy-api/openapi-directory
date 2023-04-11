import { SpeakeasyBase } from "../../../internal/utils";
import { ApiCoreDtoTagsTag } from "./apicoredtotagstag";
/**
 * The body of the group
 */
export declare class ApiCoreDtoGroupsGroup extends SpeakeasyBase {
    /**
     *  (A date in "YmdHis" format)
     */
    creationDate?: string;
    deleted?: boolean;
    id?: number;
    isPublic?: boolean;
    name?: string;
    notes?: string;
    preferred?: boolean;
    redirectOnly?: boolean;
    tags?: ApiCoreDtoTagsTag[];
    writePermited?: boolean;
}
