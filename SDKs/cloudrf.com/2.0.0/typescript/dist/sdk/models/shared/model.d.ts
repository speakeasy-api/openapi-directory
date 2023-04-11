import { SpeakeasyBase } from "../../../internal/utils";
export declare class Model extends SpeakeasyBase {
    /**
     * Radio climate for ITM model (1). 1: Equatorial (Congo) 2: Continental Subtropical (Sudan) 3: Maritime Subtropical (West coast of Africa) 4: Desert (Sahara) 5: Continental Temperate 6: Maritime Temperate, over land (UK and west coasts of US & EU) 7: Maritime Temperate, over sea
     */
    cli?: number;
    /**
     * Knife edge diffraction for enhancing basic empirical models (Already in ITM)
     */
    ked?: number;
    /**
     * Propagation model subtype/environment. 1=Conservative/Urban,2=Average/Suburban,3=Optimistic/rural
     */
    pe?: number;
    /**
     * Propagation model. 1=Irregular Terrain Model, 2=Line of Sight (LOS), 3=Hata, 4=ECC33, 5=SUI Microwave, 6=COST231, 7=Free space path loss, 9=Ericsson9999, 10=Plane earth loss, 11=Egli.
     */
    pm?: number;
    /**
     * ITM model required reliability as %
     */
    rel?: number;
    /**
     * Terrain code for ITM model (1). 1=Water,2=Wet ground,3=Farmland,4=Forest/Average,5=Mountain/Sand,6=City/Poor ground
     */
    ter?: number;
}
