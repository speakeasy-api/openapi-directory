import { SpeakeasyBase } from "../../../internal/utils";
import { CardholderReceipt } from "./cardholderreceipt";
import { Connectivity } from "./connectivity";
import { Gratuity } from "./gratuity";
import { Hardware } from "./hardware";
import { Nexo } from "./nexo";
import { OfflineProcessing } from "./offlineprocessing";
import { Opi } from "./opi";
import { Passcodes } from "./passcodes";
import { PayAtTable } from "./payattable";
import { Payment } from "./payment";
import { ReceiptOptions } from "./receiptoptions";
import { ReceiptPrinting } from "./receiptprinting";
import { Signature } from "./signature";
import { Standalone } from "./standalone";
import { Surcharge } from "./surcharge";
import { Timeouts } from "./timeouts";
import { WifiProfiles } from "./wifiprofiles";
/**
 * OK - the request has succeeded.
 */
export declare class TerminalSettings extends SpeakeasyBase {
    cardholderReceipt?: CardholderReceipt;
    connectivity?: Connectivity;
    /**
     * Settings for tipping with or without predefined options to choose from. The maximum number of predefined options is four, or three plus the option to enter a custom tip.
     */
    gratuities?: Gratuity[];
    hardware?: Hardware;
    nexo?: Nexo;
    offlineProcessing?: OfflineProcessing;
    opi?: Opi;
    passcodes?: Passcodes;
    payAtTable?: PayAtTable;
    payment?: Payment;
    receiptOptions?: ReceiptOptions;
    receiptPrinting?: ReceiptPrinting;
    signature?: Signature;
    standalone?: Standalone;
    surcharge?: Surcharge;
    timeouts?: Timeouts;
    wifiProfiles?: WifiProfiles;
}
