import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTerminalDetailsRequest extends SpeakeasyBase {
    /**
     * The unique terminal ID in the format `[Device model]-[Serial number]`.
     *
     * @remarks
     *
     * For example, **V400m-324689776**.
     */
    terminal: string;
}
