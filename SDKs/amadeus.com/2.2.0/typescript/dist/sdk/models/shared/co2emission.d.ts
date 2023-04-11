import { SpeakeasyBase } from "../../../internal/utils";
import { TravelClassEnum } from "./travelclassenum";
export declare class Co2Emission extends SpeakeasyBase {
    /**
     * quality of service offered in the cabin where the seat is located in this flight. Economy, premium economy, business or first class
     */
    cabin?: TravelClassEnum;
    /**
     * Weight of Co2 emitted for the concerned segment
     */
    weight?: number;
    /**
     * Code to qualify unit as pounds or kilos
     */
    weightUnit?: string;
}
