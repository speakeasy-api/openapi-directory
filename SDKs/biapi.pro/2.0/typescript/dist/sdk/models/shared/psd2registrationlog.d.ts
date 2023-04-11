import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Keep traces of PSD2 registration calls.
 *
 * @remarks
 *     The table is used by the plugin `psd2registration` to know:
 *      - whether it must call `update` or `create` routes on the PSD2 APIs when the config is updated
 *      - the list of PSD2 API to create (needed when a new connector is added)
 *      - the list of broken connectors
 */
export declare class Psd2RegistrationLog extends SpeakeasyBase {
    /**
     * When this row was created
     */
    createdAt: Date;
    /**
     * If fail, error message received from connector
     */
    errorMessage?: string;
    id: number;
    /**
     * ID of the psd2 registration
     */
    idPsd2registration?: number;
    /**
     * Action done: create, update, delete
     */
    type: string;
}
