import { SpeakeasyBase } from "../../../internal/utils";
import { StandbyWorkspace } from "./standbyworkspace";
export declare class CreateStandbyWorkspacesRequest extends SpeakeasyBase {
    primaryRegion: string;
    standbyWorkspaces: StandbyWorkspace[];
}
