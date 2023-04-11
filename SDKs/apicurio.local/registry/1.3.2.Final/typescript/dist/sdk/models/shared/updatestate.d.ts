import { SpeakeasyBase } from "../../../internal/utils";
import { ArtifactStateEnum } from "./artifactstateenum";
export declare class UpdateState extends SpeakeasyBase {
    /**
     * Describes the state of an artifact or artifact version.  The following states
     *
     * @remarks
     * are possible:
     *
     * * ENABLED
     * * DISABLED
     * * DEPRECATED
     *
     */
    state: ArtifactStateEnum;
}
