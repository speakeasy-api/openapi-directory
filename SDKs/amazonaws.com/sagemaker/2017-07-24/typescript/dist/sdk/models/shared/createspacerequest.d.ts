import { SpeakeasyBase } from "../../../internal/utils";
import { SpaceSettings } from "./spacesettings";
import { Tag } from "./tag";
export declare class CreateSpaceRequest extends SpeakeasyBase {
    domainId: string;
    spaceName: string;
    spaceSettings?: SpaceSettings;
    tags?: Tag[];
}
