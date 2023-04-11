import { SpeakeasyBase } from "../../../internal/utils";
import { SpaceSettings } from "./spacesettings";
export declare class UpdateSpaceRequest extends SpeakeasyBase {
    domainId: string;
    spaceName: string;
    spaceSettings?: SpaceSettings;
}
