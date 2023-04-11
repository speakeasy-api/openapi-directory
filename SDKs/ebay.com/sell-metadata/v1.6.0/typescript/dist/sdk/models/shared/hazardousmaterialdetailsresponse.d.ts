import { SpeakeasyBase } from "../../../internal/utils";
import { HazardStatement } from "./hazardstatement";
import { Pictogram } from "./pictogram";
import { SignalWord } from "./signalword";
/**
 * A type that defines the response fields for the <b>getHazardousMaterialsLabels</b> method.
 */
export declare class HazardousMaterialDetailsResponse extends SpeakeasyBase {
    /**
     * This array contains of available hazardous materials hazard pictograms for the specified marketplace.
     */
    pictograms?: Pictogram[];
    /**
     * This array contains available hazardous materials signal words for the specified marketplace.
     */
    signalWords?: SignalWord[];
    /**
     * This array contains available hazardous materials hazard statements for the specified marketplace.
     */
    statements?: HazardStatement[];
}
