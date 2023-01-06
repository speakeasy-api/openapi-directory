package shared

type StandardOffers struct {
	Functionalities []Functionality     `json:"functionalities"`
	Links           StandardOffersLinks `json:"links"`
	Offers          []StandardOffer     `json:"offers"`
}
