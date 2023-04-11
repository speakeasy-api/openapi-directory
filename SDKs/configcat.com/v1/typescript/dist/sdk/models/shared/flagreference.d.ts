import { SpeakeasyBase } from "../../../internal/utils";
import { ReferenceLines } from "./referencelines";
export declare class FlagReference extends SpeakeasyBase {
    /**
     * The actual references to the given Feature Flag or Setting.
     */
    references: ReferenceLines[];
    /**
     * The identifier of the Feature Flag or Setting the code reference belongs to.
     */
    settingId: number;
}
