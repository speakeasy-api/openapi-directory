import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The printer.
 */
export declare class Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItemsPrinter extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * Status of the printout (Pending/Printed/Canceled).
 */
export declare class Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItemsStatus extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * Printout Object.
 */
export declare class Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems extends SpeakeasyBase {
    /**
     * The time that the letter has been send to the Printout Queue.
     */
    date?: Date;
    /**
     * The printout id.
     */
    id?: string;
    /**
     * Letter Html body.
     */
    letter?: string;
    link?: string;
    /**
     * The printer.
     */
    printer?: Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItemsPrinter;
    /**
     * The printout name.
     */
    printout?: string;
    /**
     * The size of the letter.
     */
    size?: string;
    /**
     * The user who printed the letter.
     */
    source?: string;
    /**
     * Status of the printout (Pending/Printed/Canceled).
     */
    status?: Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItemsStatus;
}
