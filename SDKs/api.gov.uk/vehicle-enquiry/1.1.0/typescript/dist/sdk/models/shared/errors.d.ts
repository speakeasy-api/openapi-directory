import { SpeakeasyBase } from "../../../internal/utils";
export declare class Errors extends SpeakeasyBase {
    /**
     * DVLA reference code
     */
    code?: string;
    /**
     * A meaningful description of the error which has occurred
     */
    detail?: string;
    status?: string;
    /**
     * Error title
     */
    title: string;
}
