import { SpeakeasyBase } from "../../../internal/utils";
import { SpaceStatusEnum } from "./spacestatusenum";
/**
 * The space's details.
 */
export declare class SpaceDetails extends SpeakeasyBase {
    creationTime?: Date;
    domainId?: string;
    lastModifiedTime?: Date;
    spaceName?: string;
    status?: SpaceStatusEnum;
}
