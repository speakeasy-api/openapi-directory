import { SpeakeasyBase } from "../../../internal/utils";
import { OutputTypeEnum } from "./outputtypeenum";
/**
 * A single EarthObservationJob output band.
 */
export declare class OutputBand extends SpeakeasyBase {
    bandName: string;
    outputDataType: OutputTypeEnum;
}
