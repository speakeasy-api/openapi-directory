import { SpeakeasyBase } from "../../../internal/utils";
export declare class AvsAddress extends SpeakeasyBase {
    /**
     * The street and house number of the address.
     *
     * @remarks
     *
     * Example: 1 Infinite Loop, Cupertino.
     */
    streetAddress: string;
    /**
     * The zip or post code of the address.
     *
     * @remarks
     *
     * Example: CA 95014
     */
    zip?: string;
}
