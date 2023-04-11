import { SpeakeasyBase } from "../../../internal/utils";
import { ElevationReferenceEnum } from "./elevationreferenceenum";
import { ElevationUnitEnum } from "./elevationunitenum";
/**
 * Information about a position.
 */
export declare class Position extends SpeakeasyBase {
    elevation?: number;
    elevationReference?: ElevationReferenceEnum;
    elevationUnit?: ElevationUnitEnum;
    latitude?: number;
    longitude?: number;
}
