import { SpeakeasyBase } from "../../../internal/utils";
import { BillbeeInterfacesOrderMultiLanguageString } from "./billbeeinterfacesordermultilanguagestring";
export declare enum RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModelSendModeEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4"
}
/**
 * The message model
 */
export declare class RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel extends SpeakeasyBase {
    alternativeMail?: string;
    body?: BillbeeInterfacesOrderMultiLanguageString[];
    sendMode?: RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModelSendModeEnum;
    subject?: BillbeeInterfacesOrderMultiLanguageString[];
}
