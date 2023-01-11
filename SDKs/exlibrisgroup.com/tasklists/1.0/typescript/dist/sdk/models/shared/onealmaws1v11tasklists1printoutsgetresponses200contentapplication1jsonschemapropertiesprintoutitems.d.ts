import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The printer.
**/
export declare class Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItemsPrinter extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * Status of the printout (Pending/Printed/Canceled).
**/
export declare class Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItemsStatus extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * Printout Object.
**/
export declare class Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems extends SpeakeasyBase {
    date?: Date;
    id?: string;
    letter?: string;
    link?: string;
    printer?: Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItemsPrinter;
    printout?: string;
    size?: string;
    source?: string;
    status?: Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItemsStatus;
}
