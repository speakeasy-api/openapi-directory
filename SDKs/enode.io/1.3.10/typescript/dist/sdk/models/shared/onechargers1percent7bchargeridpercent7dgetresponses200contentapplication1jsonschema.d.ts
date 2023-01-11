import { SpeakeasyBase } from "../../../internal/utils";
export declare class Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaChargeState extends SpeakeasyBase {
    chargeRate?: number;
    isCharging?: boolean;
    isPluggedIn?: boolean;
}
/**
 * Descriptive information about the Charger
**/
export declare class Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaInformation extends SpeakeasyBase {
    brand?: string;
    id?: string;
    model?: string;
    year?: number;
}
export declare class Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchema extends SpeakeasyBase {
    chargeState?: Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaChargeState;
    id?: string;
    information?: Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaInformation;
    isReachable?: boolean;
    lastSeen?: Date;
}
