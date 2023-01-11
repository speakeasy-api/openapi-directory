import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The printer.
**/
export declare class Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutPrinter extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * Status of the printout (Pending/Printed/Canceled).
**/
export declare class Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutStatus extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * Printout Object.
**/
export declare class Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout extends SpeakeasyBase {
    date?: Date;
    id?: string;
    letter?: string;
    link?: string;
    printer?: Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutPrinter;
    printout?: string;
    size?: string;
    source?: string;
    status?: Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutStatus;
}
/**
 * A list of printouts.
**/
export declare class Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema extends SpeakeasyBase {
    printout?: Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout[];
    totalRecordCount?: number;
}
