import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK - the request has succeeded.
 */
export declare class AssignTerminalsResponse extends SpeakeasyBase {
    /**
     * Array that returns a list of the terminals, and for each terminal the result of assigning it to an account or store.
     *
     * @remarks
     *
     * The results can be:
     *
     *  - `Done`: The terminal has been assigned.
     *
     *  - `AssignmentScheduled`: The terminal will be assigned asynschronously.
     *
     *  - `RemoveConfigScheduled`: The terminal was previously assigned and boarded. Wait for the terminal to synchronize with the Adyen platform. For more information, refer to [Reassigning boarded terminals](https://docs.adyen.com/point-of-sale/managing-terminals/assign-terminals#reassign-boarded-terminals).
     *
     *  - `Error`: There was an error when assigning the terminal.
     */
    results: Record<string, string>;
}
