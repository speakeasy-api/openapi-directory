import { SpeakeasyBase } from "../../../internal/utils";
import { BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModel, BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput } from "./billbeeinterfacesbillbeeapimodelscustomermetadataapimodel";
export declare class BillbeeInterfacesBillbeeAPIModelCustomerAPIModelInput extends SpeakeasyBase {
    /**
     * If set, the customer was already archived at the given date. Further modification is disabled.
     */
    archivedAt?: Date;
    defaultCommercialMailAddress?: BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput;
    defaultFax?: BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput;
    defaultMailAddress?: BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput;
    defaultPhone1?: BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput;
    defaultPhone2?: BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput;
    defaultStatusUpdatesMailAddress?: BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput;
    email?: string;
    /**
     * The Billbee Id of the customer
     */
    id?: number;
    languageId?: number;
    metaData?: BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput[];
    name?: string;
    number?: number;
    priceGroupId?: number;
    /**
     * If set, the customer was restored from the archive at the given date.
     */
    restoredAt?: Date;
    tel1?: string;
    tel2?: string;
    /**
     * Customer Type
     */
    type?: number;
    /**
     * The vat-id, that should be saved at the customer. Only used if CustomerVatId is not set on the order.
     */
    vatId?: string;
}
export declare class BillbeeInterfacesBillbeeAPIModelCustomerAPIModel extends SpeakeasyBase {
    /**
     * If set, the customer was already archived at the given date. Further modification is disabled.
     */
    archivedAt?: Date;
    defaultCommercialMailAddress?: BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModel;
    defaultFax?: BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModel;
    defaultMailAddress?: BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModel;
    defaultPhone1?: BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModel;
    defaultPhone2?: BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModel;
    defaultStatusUpdatesMailAddress?: BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModel;
    email?: string;
    /**
     * The Billbee Id of the customer
     */
    id?: number;
    languageId?: number;
    metaData?: BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModel[];
    name?: string;
    number?: number;
    priceGroupId?: number;
    /**
     * If set, the customer was restored from the archive at the given date.
     */
    restoredAt?: Date;
    tel1?: string;
    tel2?: string;
    /**
     * Customer Type
     */
    type?: number;
    /**
     * The vat-id, that should be saved at the customer. Only used if CustomerVatId is not set on the order.
     */
    vatId?: string;
}
