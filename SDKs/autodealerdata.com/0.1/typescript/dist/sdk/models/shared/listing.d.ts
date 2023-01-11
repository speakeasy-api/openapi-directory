import { SpeakeasyBase } from "../../../internal/utils";
export declare class Listing extends SpeakeasyBase {
    askPrice: number;
    brandName: string;
    color?: string;
    dealerID: number;
    firstSeen: Date;
    interiorColor?: string;
    isNew: boolean;
    lastSeen: Date;
    mileage?: number;
    modelName: string;
    msrp: number;
    vin: string;
    vinDecode?: Record<string, any>;
    year: number;
}
