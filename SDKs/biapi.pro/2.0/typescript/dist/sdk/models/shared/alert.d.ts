import { SpeakeasyBase } from "../../../internal/utils";
export declare class Alert extends SpeakeasyBase {
    id: number;
    /**
     * ID of the related account
     */
    idAccount?: number;
    /**
     * ID of the related investment
     */
    idInvestment?: number;
    /**
     * ID of the related transaction
     */
    idTransaction?: number;
    /**
     * ID of the related user
     */
    idUser: number;
    /**
     * Date of the alerts emission
     */
    timestamp: Date;
    /**
     * Type of the alert
     */
    type: string;
    /**
     * Amount related to the alert
     */
    value: number;
}
