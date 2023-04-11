import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful POST on ConnectorLogo resource
 */
export declare class ConnectorLogo extends SpeakeasyBase {
    id: number;
    /**
     * ID of the connector
     */
    idConnector: number;
    /**
     * Id of the Bank/Provider Logo
     */
    idFile: number;
    /**
     * Logo's type
     */
    type?: string;
}
